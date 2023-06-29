import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createAuthorAndRelation(){
  const result = await prisma.authors.create({
    data: {
      name: "Mayk Brito",
      books: {
        create:  [
            { name: "Como começar na programação" },
            { name: "Como ser muito produtivo" },
          ],
      },
      
    },
    include:{
      books: true
    }
  });
  console.log(result);
}

async function createBookAndRelationWithExistsAuthor(){
  const result = await prisma.books.create({
    data:{
      name: 'Clean architecture',
      author_id: 'bfffdd87-92c8-473f-9767-ac00e4343850'
    }
  })
  console.log(result);
}

async function deleteBook(){
  const result = await prisma.books.delete({
    where:{
      id: 'db32e950-c279-4fd9-a1e0-a116aa097d02'
    }
  })
  console.log(result);
  
}

async function updateBook(){
  let bookName = await prisma.books.findUnique({
    where:{
      id: '3371bf52-df6f-45e1-a5e1-5b2555e8f319'
    },
    
  })

  const nameToBeUpdate = 'How to begin in the programming'
  let bookNameUpdated
  if(bookName?.name === nameToBeUpdate){
    console.log('The name already is the same the new');
  }else{
     bookNameUpdated = await prisma.books.update({
      where:{
        id: '3371bf52-df6f-45e1-a5e1-5b2555e8f319'
      },
      data: {
        name: nameToBeUpdate
      }
    })
  }
  console.log(bookNameUpdated);
}

updateBook()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

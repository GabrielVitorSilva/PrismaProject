import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

//Creating
async function createCourse() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name:'Prisma Course',
      description: 'Prisma Course description'
    }
  })
  console.log(result)
}

//Getting
async function findMany() {
  const result = await prisma.courses.findMany()
  console.log(result)
}

async function findFirst() {
  const result = await prisma.courses.findFirst({
    take: -1
  })
  console.log(result)
}

//Updating
async function UpdateCourse(){
  const result = await prisma.courses.update({
    where: {
      id: '001dccdc-9b5e-4658-8e7e-4b793bf94a52'
    },
    data: {
      duration: 50
    }
  })
  console.log(result);
  
}

//creating relationships
async function createOrInsertRelation(){
  const result = await prisma.courses.create({
    data: {
      name: 'NodeJs',
      duration: 200,
      description: 'This is the most complete course of nodeJs and your powers',
      teacher:{
        connectOrCreate: {
          where: {
            name: 'Gabriel'
          },
          create:{
            name: 'Gabriel',
          }
        }
      }
    } 
  })
  console.log(result);
  
}

async function createRelationWithForeignKey(){
  const result = await prisma.courses.create({
    data: {
      name: 'ReactJS Course',
      duration: 400,
      description: 'ReactJS Course',
      teacher:{
        connect:{
          id: '1f1b1e91-b380-4d94-9e15-3b5768ef7ae3'
        }
      }
    } 
  })
  console.log(result);
  
}

async function createTeacherAndRelation(){
  const result = await prisma.courses.create({
    data: {
      name: 'Docker Course advanced',
      duration: 100,
      description: 'Docker Course advanced',
      teacher:{
        create: {
          name: 'Maik Brito'
        }
      }
    } 
  })
  console.log(result);
  
}


//gettingRelations
async function getRelations(){
  const result = await prisma.courses.findMany({
    include: {
      teacher: true
    }
  })

  console.log(result);
  
}
getRelations()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
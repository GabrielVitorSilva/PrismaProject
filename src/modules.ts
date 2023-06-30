import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create(){
  const result = await prisma.modules.create({
    data: {
      description: "module firebase",
      name: "learning firebase",
      coursesModules: {
        create: {
         course: {
          connect: {
            id: 'cf221c9e-9945-4900-aacd-4fefa51cfb49'
          }
         }
        }
      }
    }
  })
  console.log(result);
}

async function manyToMany() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "cf221c9e-9945-4900-aacd-4fefa51cfb49",
      fk_id_module: "26b8263c-da06-4469-b487-11f459eab25f"
    }
  })
  console.log(result); 
}

async function createToZero(){
  const result = await prisma.coursesModules.create({
    data:{
      course: {
        create:{
          duration: 3000,
          name: 'Python Course',
          description: 'Python Course',
          teacher: {
            connectOrCreate: {
              where: {
                name: 'Gabriel Vitor',
              },
              create:{
                name: 'Gabriel Vitor',
              }
            }
          }
        }
      }
      ,
      module:{
        create:{
          description: 'learning basic',
          name: 'First module'
        }
      }
    }
  })
  console.log(result);
  
}
createToZero();
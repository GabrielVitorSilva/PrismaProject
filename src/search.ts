import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findByCourse(){
  const result = await prisma.courses.findMany({
    where: {
      id: '90563f0b-732f-4cc0-bec5-56c0d1c3832a'
    },
    include: {
      coursesModules: true
    },

  })
  console.log(JSON.stringify(result));
}

async function findByRelation(){
  const result = await prisma.coursesModules.findMany({
    include: {
      course: true,
      module: true
    }
  })
  console.log(result);
  
}

async function deleteRelation(){
  const result = await prisma.coursesModules.delete({
    where: {
      id: '4bbc7a19-3699-48d7-9b6d-7aa0ec7dd3b4'
    }
  })
  console.log(result);
  
}
deleteRelation()
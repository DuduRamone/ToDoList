import { Iidparams } from "../utils/id.type"
import prisma from "../utils/prisma"
import { ICreateTask } from "./task.schema"

export const createTask = async (data: ICreateTask) => {
  const task = await prisma.task.create({ data })

  return task
}

export const getTasks = async () => {
  const tasks = await prisma.task.findMany()

  return tasks
}

export const deleteTask = async (idTask: number) => {
  const deletedTask = await prisma.task.delete({
    where: {
      id: Number(idTask),
    },
  })

  return deletedTask
}

export const updateTask = async (idTask: number, isComplete: boolean) => {
  const updatedTask = await prisma.task.update({
    where: {
      id: Number(idTask),
    },
    data: {
      isComplete
    },
  })

  return updatedTask
}

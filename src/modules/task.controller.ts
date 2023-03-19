import { FastifyRequest } from "fastify";
import { Iidparams } from "../utils/id.type";
import { ICreateTask} from "./task.schema";
import { createTask, deleteTask, getTasks, updateTask } from "./task.service";

export const createTaskHandler = async (req: FastifyRequest <{
  Body: ICreateTask
}>) => {
  const body = req.body
  const task = await createTask({...body})

  return task
}

export const getTaskHandler = async ()=>{
  const tasks = await getTasks()

  return tasks
}

export const deleteTaskHandler = async (req: FastifyRequest <{
  Params: Iidparams
}>) =>{
  const {id} = req.params
  const deletedTask = await deleteTask(id)

  return deletedTask
}

export const updateTaskHandler = async(req: FastifyRequest <{
  Body: ICreateTask
  Params: Iidparams
}>)=>{
  const {id} = req.params
  const {isComplete} = req.body
  const updatedTask = await updateTask(id, isComplete)

  return updatedTask
}
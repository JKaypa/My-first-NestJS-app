class CreateTaskDto {
  constructor(public name: string){
    this.name = name
  }
}
const newTask = new CreateTaskDto('Joel')

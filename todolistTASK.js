export class toDoList  {

    constructor(title,description,dueDate,priority, checkbox){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checkbox = checkbox
       
    
        this.info = function(){
         
            return title + description + dueDate + priority + checkbox
        }
        }}



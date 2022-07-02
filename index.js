let log = console.log 







class projectside {
    constructor(title,description){
        this.title = title
        this.description = description
    
        this.info = function(){
         
            return title + description
        }
    
    }}
    class toDoList  {

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




 





            let projectarray = []


if (localStorage.length > 0){


    let  project  = JSON.parse(localStorage.getItem('projectside'))

   projectarray = project

   log(projectarray)
    // projectarray.push(project)
     populatesideprojects()
   
}





    // Cancel on project form

    document.getElementById('cancel').addEventListener("click", function (){
    
        document.querySelector('form').style.display = 'none'
           
    })

    //open project form

    document.getElementById('addproject').addEventListener("click", function (){
    
        document.querySelector('form').style.display = 'flex'
    })

  

// ADD PROJECT 
    document.getElementById('addproj').addEventListener("click", function (){
      

        let newproject = new projectside(document.getElementById('project').value,document.getElementById('project2').value)

        projectarray.push(newproject)

     
        
    //   localStorage.setItem('projectside', JSON.stringify(newproject))

    localStorage.setItem('projectside', JSON.stringify(projectarray))

        document.querySelector('form').style.display = 'none'

      
        document.getElementById('activeprojects').innerHTML = ''
        populatesideprojects()
    })
        
    // empty main text
    let maintext =  document.createElement('div')
    maintext.id = 'maintext'
    maintext.textContent = "Click on a project!"
    main.append(maintext)
    
   
function populatesideprojects(){


  
  
        for (let index = 0; index < projectarray.length; index++) {
           
            let newprojectside =  document.createElement('div')
 
        let projectext = document.createElement('div')
        projectext.id = 'projectext'
        let xbutton = document.createElement('div')
        xbutton.id = 'projectsidexbutton'
        xbutton.textContent = 'X'
          xbutton.dataset.id = index
           projectext.dataset.id = index
           projectarray[index].name = index

      
        newprojectside.id = 'projectside'
        newprojectside.append(projectext)
        newprojectside.append(xbutton)
       
      
       

        projectext.textContent = projectarray[index].title
        document.getElementById('activeprojects').append(newprojectside)

        // Deleting a project
        xbutton.onclick = function (){
            projectext.parentElement.remove()

            projectarray.splice(projectext.dataset.id,1)
            localStorage.setItem('projectside', JSON.stringify(projectarray))
            if (projectarray.length == 0 ) {
         
                    main.innerHTML = ''
                
                document.getElementById('name').textContent = "It's quiet..."
                document.getElementById('description').textContent = '...'

                let maintext =  document.createElement('div')
                maintext.id = 'maintext'
                maintext.textContent = "It's quiet here..."
                main.append(maintext)

                        }
           
        }

        // Clicking a project
        newprojectside.onclick = function() {
            
            document.getElementById('name').textContent = projectarray[index].title
            document.getElementById('description').textContent = projectarray[index].description


       
        
            let main =  document.getElementById('main')
          
            main.innerHTML = ''
      
        
           
            let todoplus = document.createElement('todoplus')
           
 
            //create button for tasks
         if (mainheader.children[0] == undefined) {
             let textcont = document.createElement('button')
      
         textcont.id = 'textcont'
        
         mainheader.append(textcont)
         todoplus.textContent = '+ Add task'
         todoplus.id = 'todoplus'
         textcont.append(todoplus)
         todoplus.onclick = function() {
            document.getElementById('taskpopup').style.display = 'block'
        }

       
        
      
           
        }
        populutatetasks()
        // add task
 document.getElementById('addtask').onclick = function () {
    document.getElementById('taskpopup').style.display = 'none'

    let taskdetails = new toDoList(document.getElementById('tasktitle').value,document.getElementById('taskdescription').value,document.getElementById('datevalue').value,document.getElementById('prio').value,'unchecked')
    

    if ( projectarray[index].tasks == undefined ){
        projectarray[index].tasks = []
    }

    projectarray[index].tasks.push(taskdetails)

    localStorage.setItem('projectside', JSON.stringify(projectarray))

   
   
    populutatetasks()
 }
                       } 

                       
        function populutatetasks(){
            
document.getElementById('main').innerHTML = ''

// body text when there is no projcets
if (projectarray[index].tasks == undefined || projectarray[index].tasks.length == 0 ) {
    let maintext =  document.createElement('div')
    maintext.id = 'maintext'
    maintext.textContent = "It's quiet here..."
    main.append(maintext)
  
             }


         let taskies = projectarray[index].tasks
       

    if ( taskies == undefined ){
        
        return
    }
                
                for (let index = 0; index < taskies.length; index++) {


                    let newtask = document.createElement('div')
                    let newtaskexpand = document.createElement('div')
                     let expandtext = document.createElement('div')
                     expandtext.textContent = taskies[index].description
                     expandtext.id = 'expandtext'

                    newtaskexpand.id = 'newtaskexpand'
                    newtask.id = 'newtask'

                   
                  
                    newtaskexpand.append(expandtext)
                    main.append(newtask)
                    main.append(newtaskexpand)

                    newtask.dataset.id = index
                 
            
                    let taskcontainer1 = document.createElement('div')
                    taskcontainer1.id = 'taskcontainer1'
                    newtask.append(taskcontainer1)
                     
                    let checkbox = document.createElement('input')
                    
                    checkbox.setAttribute("type", "checkbox")
                    
                    if(taskies[index].checkbox == 'checked') {
                        checkbox.checked = true
                    }
                    checkbox.id = 'radio'
                    taskcontainer1.append(checkbox)
            
                    let title1 = document.createElement('div')
                     title1.textContent = taskies[index].title
                    taskcontainer1.append(title1)


                    let rightsidetaskcontainer  = document.createElement('div')
                    rightsidetaskcontainer.id = 'rightsidetaskcontainer'
                    newtask.append(rightsidetaskcontainer)
                    let date = document.createElement('div')
                    date.id = 'date'
                    date.textContent = taskies[index].dueDate
                    rightsidetaskcontainer.append(date)


                    let prioritycont = document.createElement('div')
                    prioritycont.id = 'priority'
                   
                    prioritycont.textContent = taskies[index].priority.toUpperCase()
                    rightsidetaskcontainer.append(prioritycont)

                    if ( prioritycont.textContent == 'LOW') {
                        prioritycont.style.backgroundColor = 'lightgreen'
                    }  
                    if ( prioritycont.textContent == 'MEDIUM') {
                        prioritycont.style.backgroundColor = 'yellow'
                    }
                    if ( prioritycont.textContent == 'HIGH') {
                        prioritycont.style.backgroundColor = 'red'
                    }

                  

          
                    let arrow = document.createElement('div')
                    arrow.id = 'arrow'
                    rightsidetaskcontainer.append(arrow)


                    let exit =  document.createElement('div')
                    exit.id = 'deletetask'
                    rightsidetaskcontainer.append(exit)


                      checkbox.onclick = function () {
                          
                       
                        if (taskies[index].checkbox == 'unchecked'){
                            taskies[index].checkbox = 'checked'
                            localStorage.setItem('projectside', JSON.stringify(projectarray))
                            return
                        }
                        if (taskies[index].checkbox == 'checked'){
                            taskies[index].checkbox =  'unchecked'
                            localStorage.setItem('projectside', JSON.stringify(projectarray))   
                        }  }


                    exit.onclick = function (){
                     
                     

                         let indexy = taskies.indexOf(taskies[index])
                        
                        
                          taskies.splice(indexy,1)
                        
                            newtask.remove()

                          localStorage.setItem('projectside', JSON.stringify(projectarray))

                          if (taskies.length == 0 ) {
                           let maintext =  document.createElement('div')
                           maintext.id = 'maintext'
                           maintext.textContent = "It's quiet here..."
                           main.append(maintext)
                         
                                    }

                         

                    }

             
                          
                    arrow.addEventListener("click", function(){
                                       
                                       let content = newtaskexpand
                                       if (content.style.display === 'block') {
                                           content.style.display = "none";
                                       } else { 
                                           content.style.display = "block";
                                       }
                                   } )
                                }}}
                            
                            
                            
                            }
    
            document.getElementById('canceltask').onclick = function(){
                document.getElementById('taskpopup').style.display = 'none'
            }



 
       
    
        


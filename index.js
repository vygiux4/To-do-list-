let log = console.log 


import {toDoList} from './todolistTASK'
import  {projectside} from './todolistPROJECTS'

let projectarray = []


    // Cancel on project form

    document.getElementById('cancel').addEventListener("click", function (){
    
        document.querySelector('form').style.display = 'none'
           
    })

    //open project form

    document.getElementById('addproject').addEventListener("click", function (){
    
        document.querySelector('form').style.display = 'flex'
    })

  

// ADD PROJECT MAIN
    document.getElementById('addproj').addEventListener("click", function (){
      

        let newproject = new projectside(document.getElementById('project').value,document.getElementById('project2').value)

        projectarray.push(newproject)
        

        document.querySelector('form').style.display = 'none'

      
        document.getElementById('activeprojects').innerHTML = ''
        populatesideprojects()
    })
        
  
    
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
    
   
    populutatetasks()
 }
                       } 
        function populutatetasks(){
            
document.getElementById('main').innerHTML = ''


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
                          log(taskies[index])
                       
                        if (taskies[index].checkbox == 'unchecked'){
                            taskies[index].checkbox = 'checked'
                            return
                        }
                        if (taskies[index].checkbox == 'checked'){
                            taskies[index].checkbox =  'unchecked'
                        }  }


                    exit.onclick = function (){
                        log(taskies[index])
                        
                        removed =  taskies.pop(taskies[index])
                          newtask.remove()

                    }
                          
                    arrow.addEventListener("click", function(){
                                       
                                       let content = newtaskexpand
                                       if (content.style.display === 'block') {
                                           content.style.display = "none";
                                       } else { 
                                           content.style.display = "block";
                                       }
                                   } )
                                }}}}
    
            document.getElementById('canceltask').onclick = function(){
                document.getElementById('taskpopup').style.display = 'none'
            }


       
    
        


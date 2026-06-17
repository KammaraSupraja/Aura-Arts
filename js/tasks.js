document.addEventListener('DOMContentLoaded', () => {
     // DOM Element Node Targets
     const taskInput = document.getElementById('taskInput');
     const addTaskBtn = document.getElementById('addTaskBtn');
     const taskList = document.getElementById('taskList');
     const searchBar = document.getElementById('searchBar');
     const filterStatus = document.getElementById('filterStatus');
 
     // 1. LOCAL STORAGE INTEGRATION: Load initialized array array tracking stack or empty state array []
     let tasks = JSON.parse(localStorage.getItem('studioTasks')) || [];
 
     // --- Core CRUD Handlers ---
 
     // CREATE: Add new tasks items logic components
     function addTask() {
         const text = taskInput.value.trim();
         if (text === '') return alert('Task text cannot be empty!');
 
         const newTask = {
             id: Date.now().toString(), // Generates unique tracking ID key
             title: text,
             completed: false
         };
 
         tasks.push(newTask);
         saveAndRender();
         taskInput.value = ''; // Flush placeholder entry text input container
     }
 
     // DELETE: Permanently wipe a target array object element stack link
     window.deleteTask = function(id) {
         tasks = tasks.filter(task => task.id !== id);
         saveAndRender();
     };
 
     // UPDATE: Toggle completed task boolean status flag 
     window.toggleComplete = function(id) {
          tasks = tasks.map(task => {
              if (task.id === id) {
                  task.completed = !task.completed; // Flips false to true, or true to false
              }
              return task;
          });
          saveAndRender(); 
      };
 
     // UPDATE: In-place prompt rewrite window edit component logic text string
     window.editTask = function(id) {
         const targetTask = tasks.find(task => task.id === id);
         const currentText = targetTask.title;
         const newText = prompt("Update your studio task name assignment details:", currentText);
         
         if (newText !== null && newText.trim() !== "") {
             targetTask.title = newText.trim();
             saveAndRender();
         }
     };
 
     // Sync State Controller Database Storage Module Wrapper Utilities
     function saveAndRender() {
         localStorage.setItem('studioTasks', JSON.stringify(tasks));
         renderTasks();
     }
 
     // --- READ & FILTER: Dynamic Interface Engine Logic Renderer View ---
     function renderTasks() {
         taskList.innerHTML = '';
         
         const searchText = searchBar.value.toLowerCase();
         const statusFilter = filterStatus.value;
 
         // Process search criteria + state conditional filtering array sweeps
         const filteredTasks = tasks.filter(task => {
             const matchesSearch = task.title.toLowerCase().includes(searchText);
             
             if (statusFilter === 'completed') return matchesSearch && task.completed;
             if (statusFilter === 'pending') return matchesSearch && !task.completed;
             return matchesSearch; // 'all' fallback state scenario matches
         });
 
         if (filteredTasks.length === 0) {
             taskList.innerHTML = `<li class="no-submissions" style="text-align:center; color:#7c7c93; padding:1rem;">No assignments found matching constraints.</li>`;
             return;
         }
 
        filteredTasks.forEach(task => {
          const li = document.createElement('li');
          li.className = `task-item ${task.completed ? 'completed' : ''}`;
          li.innerHTML = `
              <div class="task-content">
                  <button class="btn-status ${task.completed ? 'btn-done' : 'btn-pending'}" onclick="toggleComplete('${task.id}')">
                      ${task.completed ? '<i class="fas fa-check-circle"></i> Completed' : '<i class="far fa-circle"></i> Mark Complete'}
                  </button>
                  <span class="task-text">${escapeHTML(task.title)}</span>
              </div>
              <div class="action-btns">
                  <button class="btn-action btn-edit" onclick="editTask('${task.id}')" title="Edit Assignment Text"><i class="fas fa-edit"></i></button>
                  <button class="btn-action btn-delete" onclick="deleteTask('${task.id}')" title="Delete Assignment Record"><i class="fas fa-trash"></i></button>
              </div>
          `;
          taskList.appendChild(li);
      });
     }
     // Secure sanitizer utility hook against injection layout breaking vectors
     function escapeHTML(str) {
         return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
     }
 
     // Bind Core Interface Event Monitors
     addTaskBtn.addEventListener('click', addTask);
     taskInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTask(); });
     searchBar.addEventListener('input', renderTasks);
     filterStatus.addEventListener('change', renderTasks);
 
     // Bootstrap Initial Initial View Draw Phase Execution Line
     renderTasks();
 });
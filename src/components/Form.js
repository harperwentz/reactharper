import React from 'react';


function Form(){
    return(
      <form>
          <input type="text" class="todo-input" />
          <button class="todo-button" type="submit">
              <i class="fas fa-plus-square"></i>
          </button>
          <div class="select">
              <select name="todos" class="filter-todo">
                  <option value="all">All</option>
                  <option value="done">Completed</option>
                  <option value="not done">Uncompleted</option>
              </select>
          </div>
      </form>
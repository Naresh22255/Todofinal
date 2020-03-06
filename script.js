// $("#submit").click(function() {
//   $("#todo").val() = $("#list").html("<li></li>");
// // });

// $(function() {
//   $("#submit").click(function() {
//     let value = $("#todo").val();
//     if (value !== "") {
//       let nlist = $("<li></li>").value;
//       $(nlist).append('<button class="remo">X</button>');
//       $("#list").append(nlist);
//     }
//   });
// });

const initialData = {
  todo: {
    items: []
  }
};

renderApp(initialData);

function renderApp(data) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = App(data); // Why should you pass in data inside APP

  rootElem
    .querySelector(".form")
    .addEventListener("submit", event => handleTodoFormAdd(event, data));
}

// todo form submit event handler

function handleTodoFormAdd(event, data) {
  event.preventDefault();
  // Update data

  const newItem = {
    //Randomly generated ID TIME STAMP
    id: `${Date.now()}`,

    // The text the user entered
    description: event.target.elements.todo.value,

    // boolean defaults to false
    isCompleted: false
  };

  const updatedData = {
    ...data,
    todo: {
      items: [...data.todo.items, newItem]
    }
  };

  console.log("Hiiiiii");

  // Re-render components
  renderApp(updatedData);
}

function App(props) {
  return `
  <h1>ToDo List</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="aaa">
            ${Form(props)}
            <br />
            <br />

            ${Buttons(props)}
            <br /><br /><br />

            ${TodoList(props.todo)} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function TodoList(props) {
  return `
    <div id="box">
              <h3>Tasks to be done</h3>
              <div class="container">
                <div class="row">
                  <div class="col-3"></div>
                  <div class="col-6">
                    <ol id="list">
                     
                     ${props.items
                       .map(function(todoItem) {
                         return ToDoItem(todoItem);
                       })
                       .join("")}
                    </ol>
                  </div>
                  <div class="col-3"></div>
                </div>
              </div>
            </div>
            `;
}

function ToDoItem(props) {
  return `
    <section>
        <li class="addlist">
          ${props.description}<span class=".comp"> &#10004;</span>
          <span class=".rem">X</span>
        </li>
      </section>
    `;
}

function Form(props) {
  return `
          <form class="form">
              <textarea name="todo" id="todo" cols="30" rows="1"></textarea
              ><br />
              <button type="submit" id="submit" class="btn btn-info">
                Submit
              </button>
            </form>`;
}

function Buttons(props) {
  return `
            <div class="but">
              <button type="button" class="btn btn-primary">View All</button>
              <button type="button" class="btn btn-success">Completed</button>
              <button type="button" class="btn btn-warning">In-Progress</button>
            </div>`;
}

// document.body.innerHTML = App({});

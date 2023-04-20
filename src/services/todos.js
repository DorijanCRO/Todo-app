import apiOrigin from "./api";


export const getTodo = () => {
    return fetch(`${apiOrigin}/todos`)
       .then((response) => {
        return response.json();
       })
       .catch((err) => {
        return err;
       })
      };


export const postTodo = (todo) => {
        return fetch(`${apiOrigin}/todo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }).then((res) => res.json());
      };


export const deleteTodo = (id) => {
      return fetch(`${apiOrigin}/delete/${id}`, {
          method : "DELETE"
      }).then((res) => res.status
    );
};
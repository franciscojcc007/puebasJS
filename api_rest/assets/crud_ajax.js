const d = document,
        $table = d.querySelector(".crud-table"),
        $form = d.querySelector(".crud-form"),
        $title = d.querySelector(".crud-title"),
        $template = d.getElementById("crud-template").content,
        $fragment = d.createDocumentFragment();

      const ajax = (options) => {
        let { url, method, success, error, data } = options;
        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", (e) => {
          if (xhr.readyState !== 4) return;

          if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
          } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
          }
        });
        
        xhr.open(method || "GET", url);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(data));
      };

      const getAll = () => {
        ajax({
          url: "http://localhost:3000/fisiculturista_open",
          success: (res) => {
            console.log(res);

            res.forEach((el) => {
              $template.querySelector(".nombre").textContent = el.nombre;
              $template.querySelector(".pais").textContent = el.pais;
              $template.querySelector(".categoria").textContent = el.categoria;
              $template.querySelector(".peso").textContent = el.peso;
              $template.querySelector(".altura").textContent = el.altura;
              $template.querySelector(".campeonato").textContent = el.campeonato;
              $template.querySelector(".anios").textContent = el.anios;

              $template.querySelector(".edit").dataset.id = el.id;
              $template.querySelector(".edit").dataset.nombre = el.nombre;
              $template.querySelector(".edit").dataset.pais = el.pais;
              $template.querySelector(".edit").dataset.categoria = el.categoria;
              $template.querySelector(".edit").dataset.peso = el.peso;
              $template.querySelector(".edit").dataset.altura = el.altura;
              $template.querySelector(".edit").dataset.campeonato = el.campeonato;
              $template.querySelector(".edit").dataset.anios = el.anios;

              $template.querySelector(".delete").dataset.id = el.id;

              let $clone = d.importNode($template, true);
              $fragment.appendChild($clone);
            });

            $table.querySelector("tbody").appendChild($fragment);
          },
          error: (err) => {
            console.log(err);
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
          },
        });
      };

      d.addEventListener("DOMContentLoaded", getAll);

      d.addEventListener("submit", (e) => {
        if (e.target === $form) {
          e.preventDefault();

          if (!e.target.id.value) {
            //Create - POST
            ajax({
              url: "http://localhost:3000/fisiculturista_open",
              method: "POST",
              success: (res) => location.reload(),
              error: (err) =>
                $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
              data: {
                nombre: e.target.nombre.value,
                pais: e.target.pais.value,
                categoria: e.target.categoria.value,
                peso: e.target.peso.value,
                altura: e.target.altura.value,
                campeonato: e.target.campeonato.value,
                anios: e.target.anios.value,
              },
            });
          } else {
            //Update - PUT
            ajax({
              url: `http://localhost:3000/fisiculturista_open/${e.target.id.value}`,
              method: "PUT",
              success: (res) => location.reload(),
              error: (err) =>
                $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
              data: {
                nombre: e.target.nombre.value,
                pais: e.target.pais.value,
                categoria: e.target.categoria.value,
                peso: e.target.peso.value,
                altura: e.target.altura.value,
                campeonato: e.target.campeonato.value,
                anios: e.target.anios.value,
              },
            });
          }
        }
      });

      d.addEventListener("click", (e) => {
        if (e.target.matches(".edit")) {
          $title.textContent = "Editar fisiculturista";
          $form.nombre.value = e.target.dataset.nombre;
          $form.pais.value = e.target.dataset.pais;
          $form.categoria.value = e.target.dataset.categoria;
          $form.peso.value = e.target.dataset.peso;
          $form.altura.value = e.target.dataset.altura;
          $form.campeonato.value = e.target.dataset.campeonato;
          $form.anios.value = e.target.dataset.anios;
          $form.id.value = e.target.dataset.id;
        }

        if (e.target.matches(".delete")) {
          let isDelete = confirm(`¿Estás seguro de eliminar el id ${e.target.dataset.id}?`);

          if (isDelete) {
            //Delete - DELETE
            ajax({
              url: `http://localhost:3000/fisiculturista_open/${e.target.dataset.id}`,
              method: "DELETE",
              success: (res) => location.reload(),
              error: (err) => alert(err),
            });
          }
        }
      });
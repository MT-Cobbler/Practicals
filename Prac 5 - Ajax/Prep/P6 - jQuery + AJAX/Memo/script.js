$(() => {
    $("#movieList").on("click", "li a", function(e) {
        e.preventDefault();

        let url = $(this).attr("href");
        let index = $(this).parent().index();

        loadMovieDescription(url)
            .then(() => loadMovieInfo(index))
            .then(({ director, runtime }) => {

                $("div#movie").append(
                    $("<ul></ul>")
                    .append(
                        $("<li></li>")
                        .html(`Director: ${director}`)
                    )
                    .append(
                        $("<li></li>")
                        .html(`Runtime: ${runtime}`)
                    )
                )
            });
    });

    const loadMovieDescription = url => {
        return new Promise((res, rej) => {
            $("#movie").load(`${url} div#description`, data => res(data));
        });
    }

    const loadMovieInfo = index => {
        return new Promise((res, rej) => {
            $.getJSON("movies.json", data => res(data[index]));
        });
    }
});
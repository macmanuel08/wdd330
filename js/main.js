document.addEventListener('DOMContentLoaded', function() {
    function recordContent() {
        const contents = [
            {
                label: "Week 01",
                url: "w1/index.html"
            },
            {
                label: "Week 02",
                url: "w2/index.html"
            },
            {
                label: "Week 03",
                url: "w3/index.html"
            },
            {
                label: "Week 04",
                url: "w4/index.html"
            },
            {
                label: "Week 05",
                url: "w5/index.html"
            },
            {
                label: "Challenge One: Todo",
                url: "ch1/index.html"
            },
            {
                label: "Week 09",
                url: "w9/index.html"
            },
            {
                label: "Week 10",
                url: "w10/index.html"
            },
            {
                label: "Earthquake Watch",
                url: "quake/index.html"
            },
            {
                label: "Final Project - COVID API",
                url: "covid19-api/index.html"
            }
        ];

        for (let i = 0; i < contents.length; i++) {

            const list = document.createElement('li');
            const link = document.createElement('a');
            link.innerHTML = contents[i].label;
            link.setAttribute('href', contents[i].url);

            list.appendChild(link);
            document.querySelector('.directory').appendChild(list);
        }
    }

    recordContent();

});
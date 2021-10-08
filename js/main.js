document.addEventListener('DOMContentLoaded', function() {
    function recordContent() {
        const contents = [
            {
                label: "Week 01 Notes",
                url: "w1/index.html"
            },
            {
                label: "Week 02 Notes",
                url: "w2/index.html"
            },
            {
                label: "Week 03 Notes",
                url: "w3/index.html"
            },
            {
                label: "Week 04 Notes",
                url: "w4/index.html"
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
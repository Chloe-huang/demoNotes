let url = "http://localhost:3000/api/list";
            fetch(url, {
                methods: "post",
                headers: {
                    "Accept": "application/json"
                }
            }).then((res) => {
                return res.json();
            }).then((res) => {
                this.resulte = res;
                console.log(this.resulte);
            })
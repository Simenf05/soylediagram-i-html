

const fileInputEl = document.querySelector("#fileInput")
const soylerEl = document.querySelector("#soyler")


function makeSoyle(data) {

    const year = data[0]

    const boys = Number(data[1])
    const girls = Number(data[2])

    const sum = data[3]

    const soyleEl = document.createElement("div")
    soyleEl.className = "soyle"

    const boysEl = document.createElement("div")

    

    soylerEl.appendChild(soyleEl)


}

fileInputEl.onchange = () => {
    

    const file = fileInputEl.files[0]
    const fr = new FileReader()
    

    fr.onload = () => {

        const data = []
        const linesArr = fr.result.split(/\r?\n/)
        
        linesArr.forEach(line => {
            data.push(line.split(";"))
        })

        
        data[0].forEach((value, i) => {

            if (i === 0) {

                return

            }
            else {

                const individualData = []

                data.forEach(line => {
                    individualData.push(line[i])
                });

                makeSoyle(individualData)



            }
        })

    }

    fr.readAsText(file)
}


const getImagenPromesa = () => {
    return new Promise ((resolve) =>  resolve (`https://holahola.com`)
    )
}

getImagenPromesa().then(console.log)
const OPENAI_API_KEY = "";

const btn = document.querySelector( "#btn" );
const input = document.querySelector( "#input" );
const img = document.querySelector( "#img" )

btn.addEventListener( "click", async () =>
{
    if ( input.value === '' )
    {
        alert( 'Ingresa una peticion ' )
        return
    }

    btn.disabled = true

    const res = await fetch( "https://api.openai.com/v1/images/generations", {
        method: "POST",
        body: JSON.stringify( {
            prompt: input.value,
            n: 1,
            size: "1024x1024",
        } ),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ OPENAI_API_KEY }`,

        },
    } );

    const data = await res.json();

    console.log( data.data[ 0 ].url );

    img.src = data.data[ 0 ].url
    
    btn.disabled = false
} )
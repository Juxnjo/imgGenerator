const OPENAI_API_KEY = "";

const btn = document.querySelector( "#btn" );
const input = document.querySelector( "#input" );
const img = document.querySelector("#img")

btn.addEventListener( "click", async () =>
{
    console.log( input.value );

    const res = await fetch( "https://api.openai.com/v1/images/generations", {
        method: "POST",
        body: JSON.stringify( {
            prompt: "Un perro",
            n: 1,
            size: "1024x1024",
        } ),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ OPENAI_API_KEY }`,

        },
    } );

    const data = await res.json();
    console.log( data );
} )
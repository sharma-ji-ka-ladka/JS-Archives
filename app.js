function loadProject(name){
    const contentArea=document.getElementById('mainContainer');
    
    fetch(`Projects/${name}/${name}.html`)
        .then(response => response.text())
        .then(html=>{
            contentArea.innerHTML=html

            //This removes the older added tags, else the new tags are made on every click and keep appending in DOM resulting in failure or project
            const oldScript=document.getElementById("projectScript")
            const oldStyle=document.getElementById("projectStyle")

            if(oldScript) oldScript.remove();
            if(oldStyle) oldStyle.remove();

            const link=document.createElement('link');
            link.id='projectStyle'
            link.rel='stylesheet';
            link.href=`Projects/${name}/${name}Style.css`;
            document.head.appendChild(link);

            const script=document.createElement('script');
            script.id='projectScript'
            script.src=`Projects/${name}/${name}JS.js`;
            document.body.appendChild(script);
        })
}

AFRAME.registerComponent("tour",{
    init: function(){
        this.placesContainer=this.el
        this.createCards()
    },

    createCards:function(){
        const thumbNailsRef = [
            {
              id: "desert",
              title: "Desert",
              url: "./assets/thumbnails/desert.jpg",
            },
            {
              id: "forest",
              title: "Forest",
              url: "./assets/thumbnails/forest.jpg",
            },
      
            {
              id: "mountain",
              title: "Mountain",
              url: "./assets/thumbnails/mountain.jpg",
            },
            {
              id: "underwater",
              title: "Underwater",
              url: "./assets/thumbnails/underwater.jpg",
            },
          ];

          var previousXPosition= -62.5

          for(var item of thumbNailsRef){
            var posX= previousXPosition+25
            var posY= 0
            var posZ= -40

            var position={x:posX ,y:posY, z:posZ}

            previousXPosition=posX

            const borderEl=this.createBorder(item.id,position)
            const thumbnailEl=this.createThumbnail(item)
            borderEl.appendChild(thumbnailEl)
            const titleEl=this.createTitle(position,item)
            borderEl.appendChild(titleEl)

            this.placesContainer.appendChild(borderEl)
          }
    },

    createBorder: function(id,position){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"#ffffff",
            opacity:0.5
        })
        entityEl.setAttribute("cursor-listener", {});


        return entityEl
    },

    createThumbnail: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive:"circle",
            radius:9
        })
        entityEl.setAttribute("material",{
            src:item.url
        })

        return entityEl
    },

    createTitle: function(position,item){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("text",{
            font:"exo2bold",
            align:"center",
            width:110,
            color:"#334465",
            value:item.title
        })
        var elementPosition=position
        elementPosition.y=-27
        entityEl.setAttribute("position",elementPosition)
        entityEl.setAttribute("visible",true)

        return entityEl
    }
})
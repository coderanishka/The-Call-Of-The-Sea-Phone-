function spawnFishL(){
        if (frameCount%20===0){
          fishL = createSprite(-20,random(400,innerHeight-100));
          fishL.velocityX = 37;
          fishL.scale = 0.2;
          fishL.lifetime = 1000;
          var rand = Math.round(random(1,6));
           switch(rand) {
                case 1: fishL.addImage(fishL2);
                fishL.scale = innerWidth/40000;
                break;
        case 2: fishL.addImage(fishL3);
                fishL.scale = innerWidth/6500;
                break;
        case 3: fishL.addImage(fishL5);
                fishL.scale = innerWidth/6500;
                break;  
        case 4: fishL.addImage(fishL1);
                fishL.scale = innerWidth/6500;
                break;
        case 5: fishL.addImage(fishL4);
                fishL.scale = innerWidth/6500;
                break;
        case 6: fishL.addImage(fishL6);
                fishL.scale = innerWidth/6500;
                     break;    
             default: break;
           }
       
          FishLGroup.add(fishL);
        }
       }
       
        
       
        function spawnFishR(){
         if (frameCount%25===0){
           fishR = createSprite(5100,random(400,innerHeight-100));
           fishR.velocityX = -37;
           fishR.scale = 0.2;
           fishR.lifetime = 1000;
       
           var rand = Math.round(random(1,5));
            switch(rand) {
                case 1: fishR.addImage(fishR2);
                fishR.scale = innerWidth/40000;
                break;
        case 2: fishR.addImage(fishR3);
                fishR.scale = innerWidth/6500;
                break;
        case 3: fishR.addImage(fishR5);
                fishR.scale = innerWidth/40000;
                break;  
        case 4: fishR.addImage(fishR1);
                fishR.scale = innerWidth/40000;
                break;
        case 5: fishR.addImage(fishR4);
               fishR.scale = innerWidth/40000;
                      break; 
              default: break;
            }
        
           FishRGroup.add(fishR);
         }
        }
        
         function spawnShark(){
          if (frameCount%800===0){
           shark = createSprite( innerWidth/2,height/2+height/3);
           shark.addImage(sharkImg);
           shark.scale = innerWidth/8500;
           shark.setCollider("circle",-2250,450,200);
           shark.velocityX = -28;
           shark.lifetime = 1000;
           SharkGroup.add(shark);
          }      
         }
        
        function spawnTrashL(){
         if (frameCount%15===0){
           trashL = createSprite(-10,random(400,innerHeight-100));
           trashL.velocityX = 32;
           trashL.scale = 0.1;
           trashL.lifetime = 800;
       
           var rand = Math.round(random(1,4));
           switch(rand) {
                case 1: trashL.addImage(trash1Img);
                trashL.scale = innerWidth/40000;
                break;
        case 2: trashL.addImage(trash2Img);
                trashL.scale = innerWidth/9000;
                break;
        case 3: trashL.addImage(trash3Img);
                trashL.scale = innerWidth/20000;
                break;   
        case 4: trashL.addImage(trash4Img);
                trashL.scale = innerWidth/25000;
                     break;   
             default: break;
           }
       
           TrashLGroup.add(trashL);
         }
        }
       
        function spawnTrashR(){
         if (frameCount%17===0){
           trashR = createSprite(5100,random(400,innerHeight-100));
           trashR.velocityX = -38;
           trashR.scale = 0.1;
           trashR.lifetime = 800;
       
           var rand = Math.round(random(1,4));
           switch(rand) {
                case 1: trashR.addImage(trash1Img);
                trashR.scale = innerWidth/40000;
                break;
         case 2: trashR.addImage(trash2Img);
                trashR.scale = innerWidth/9000;
                break;
         case 3: trashR.addImage(trash3Img);
                trashR.scale = innerWidth/20000;
                break;   
         case 4: trashR.addImage(trash4Img);
                trashR.scale = innerWidth/25000;
                     break;   
             default: break;
           }
       
           TrashRGroup.add(trashR);
         }
        }
       
        function isTouching(object1,object2){
                if (object1.x - object2.x < object2.innerWidth/2 + object1.innerWidth/2
                  && object2.x - object1.x < object2.innerWidth/2 + object1.innerWidth/2
                  && object1.y - object2.y < object2.height/2 + object1.height/2
                  && object2.y - object2.y < object2.height/2 + object1.height/2) {
                  
                  return true;
                }
                else {
                  return false;
                } 
        }   


app.factory('Tree',function(){
    //类的增强，被过滤器依赖吧
    var self = this;
    var C = {
        letChildChange: function(charger,childName){
            var fatherValue = charger.$ifChoosen
            if(childName == undefined) childName = 'items'
            if(charger.$hasChildren() == true){
                charger[childName].map(function(item){
                    item.$ifChoosen = fatherValue
                    C.letChildChange(item,childName)
                })
            }
        },
        followMyFather: function(father,childName){
            if(father == undefined) return
            var _cache_NoChoosen = 0
            father[childName].map(function(item,index){
                if(!item.$ifChoosen) _cache_NoChoosen++
                if(index == father[childName].length-1){
                    if( _cache_NoChoosen<1){
                        father.$ifChoosen = true
                    }else{
                        father.$ifChoosen = false
                    }
                }
            })
        }
    }
    var enhanceItem = function (charger,childName) {
        //console.log(charger,'check if the inherit is done expectlly')
        charger.$hasChildren = function (){
            if(charger[childName] && charger[childName].length > 0) {
                return true
            }
            return false
        }

        /*折叠为真，展开为错，默认为折叠*/
            if(charger.$ifFolded == undefined) {
                charger.$ifFolded = true;
            }
        /*ng-click的时候触发是否折叠这个tree*/
        charger.$changeFolded = function (){
            console.log('has changed')
            charger.$ifFolded = !charger.$ifFolded
        }


        /* 一旦检测到变换就立刻让执行这两个 */
        charger.$getChange = function(father){
            C.followMyFather(father,childName)
            C.letChildChange (charger,childName)
        }
        charger.$choosen = false
        }
     this.followSelf = function (input,childName){
         if(childName == undefined){
             childName = 'items'
         }
        if(input && input.length > 0)
            input.map(function(item){
                //強化的是自己
                enhanceItem(item,childName)
                //强化完后可以这样使用这些新的方法来判断是否有儿子了，有立刻调用自身一次
                if(item.$hasChildren() == true){
                    self.followSelf(item[childName],childName)
                }
            })
     }
    return {
        enhance: this.followSelf
    }
}
)

app.factory('Tree',function(){
    //类的增强，被过滤器依赖吧
    var self = this;
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
        //todo: 考察這個方法是否有寫錯的嫌疑
        charger.$changeFolded = function (){
            console.log('has changed')
            charger.$ifFolded = !charger.$ifFolded
        }

        }
     this.followSelf = function (input,childName){
         if(childName == undefined){
             childName = 'items'
         }
        if(input && input.length > 0)
            input.map(function(item){
                //強化的是自己
                enhanceItem(item,childName)
                //靠的是enhanceitem 的 return，還是代碼自己能找到兒子呢
                if(item.$hasChildren() == true){
                    //console.log('has child','my id is' + item.id)
                    self.followSelf(item[childName],childName)
                }
            })
     }
    return {
        enhance: this.followSelf
    }
}
)
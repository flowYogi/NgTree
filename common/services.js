
app.factory('Tree',function(){
    //类的增强，被过滤器依赖吧
    var enhanceItem = function (item) {
        item.$hasChildren = function (){
            if(this.items && this.items.length > 0) {
                return true
            }
            return false
        }

        /*折叠为真，展开为错，默认为折叠*/
            if(this.$ifFolded == undefined) {
                this.$ifFolded = true;
            }

        /*ng-click的时候触发是否折叠这个tree*/
        item.$changeFolded = function (){
            this.$ifFolded = !this.$ifFolded
        }

        }
     this.enhanceSelf = function (){
        if(input && input.length > 0)
            input.map(function(item){
                enhanceItem(item)
            })
     }
}
)
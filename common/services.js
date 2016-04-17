
app.factory('Tree',function(){
    var self = this
    var C = {
        checkItsChild: function(items,childName){
            if(items && items[childName].length >0){
                return true
            }
            return false
        }
    }
    var enhanceItem = function(charger,childName){
        //这里的查询有孩子否的方法已经不是用来展示了，而是用来折叠了
        charger.$hasChild = function () {
            return C.checkItsChild(charger,childName)
        }
        //如果为false ，表示为展开状态
        charger.$ifFolded = false

        charger.$changeFolded = function(e){
            var e = e || window.event
            //e.preventDefault()
            console.log('has change')
            charger.ifFolded = !charger.ifFolded
        }
        charger.$deleteItself = function (e) {
            var e = e || window.event
            //e.preventDefault()
            //未验证过
            console.log('has delete')
            delete charger
        }
    }

    this.init = function(items,childName){
        if(!childName) childName = 'nodes'
        //首次使用没办法用到C了，毕竟都是对象啊
        if(items && items.length >0){
            items.map(function (item) {
                enhanceItem(item,childName)
                if(item.$hasChild()){
                    self.init(item[childName],childName)
                }
            })
        }
    }
    return {
        enhanceItem: this.init
    }
}
)
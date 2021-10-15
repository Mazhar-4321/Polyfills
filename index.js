var arr=[1,2,3,4];
Array.prototype.myReverse=function()
{
var obj=this;
for(var f=0,l=obj.length-1;f<=l;f++,l--)
{
obj[f]=obj[f]^obj[l];
obj[l]=obj[f]^obj[l];
obj[f]=obj[f]^obj[l];
}
this.Array=obj;
}
var str="m a z h a r";
String.prototype.mySplit=function(args)
{
var obj=this;
var ans=[];
var temp_obj=obj;
for(var i=0;i<args.length;i++)
{
   var offset=args[i];
   var temp="";
   for(var j=0,c=0;j<obj.length;j++)
   {
   if(obj[j]!=offset){temp=temp+obj[j];c++;}
   else
   {
   ans.push(temp);
   temp="";
   temp_obj=temp_obj.slice(0,c+1);c=0;
   }
   
   }
   obj=temp_obj;
   
   

}
ans.push(obj);
return ans;
}
Array.prototype.myJoin=function(){
    var obj=this;
    var ans="";
    for(var i=0;i<this.length;i++)
    {
        if(i==0||i==this.length)
        {
            ans=ans+obj[i];
        }
        else
        {
            ans=ans+","+obj[i];
        }
    }
    return ans;
}

#### 使用$set会造成全局刷新

vm.$set 与 Vue.set 本质上相同

不好的写法：
```
this.systemList0[i]["linkTime"]=res[0].linkStatus.lastUpdateTime;
this.$set(this.systemList0[i],"linkStatus",res[0].linkStatus.status);
this.$set(this.systemList0[i],"runStatus",res[0].runStatus.status);
this.$set(this.systemList0[i],"alarmStatus",res[0].alarmStatus.status);
this.$set(this.systemList0[i],"cop",res[0].cop.value);
this.$set(this.systemList0[i],"copStatus",res[0].cop.status);
this.$set(this.systemList0[i],"linkTime",res[0].linkStatus.lastUpdateTime);
```
可以写成下面这样：只刷新一次，节约性能。
```
this.systemList0[i]["linkStatus"]=res[0].linkStatus.status;
this.systemList0[i]["runStatus"]=res[0].runStatus.status;
this.systemList0[i]["alarmStatus"]=res[0].alarmStatus.status;
this.systemList0[i]["cop"]=res[0].cop.value;
this.systemList0[i]["copStatus"]=res[0].cop.status;
this.$set(this.systemList0[i],"linkTime",res[0].linkStatus.lastUpdateTime);
```
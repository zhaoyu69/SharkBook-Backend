## User 用户表
<table><tr><th width='33.24%'>Column</th><th width='33.24%'>Datatype</th><th width='33.24%'>Description</th></tr><tr><td>username</td><td>String</td><td>用户名</td></tr><tr><td>password</td><td>String</td><td>密码</td></tr><tr><td>nickname</td><td>String</td><td>昵称</td></tr><tr><td>sex</td><td>String</td><td>性别</td></tr><tr><td>uid</td><td>Number</td><td>唯一ID</td></tr></table>

## Account 用户账单表
<table><tr><th width='33.24%'>Column</th><th width='33.24%'>Datatype</th><th width='33.24%'>Description</th></tr><tr><td>user</td><td>Pointer</td><td>用户</td></tr><tr><td>type</td><td>Pointer</td><td>账单类别</td></tr><tr><td>price</td><td>Number</td><td>金额</td></tr><tr><td>remarks</td><td>String</td><td>备注</td></tr><tr><td>time</td><td>Date</td><td>时间</td></tr></table>

## UserType 用户类别库表
<table><tr><th width='33.24%'>Column</th><th width='33.24%'>Datatype</th><th width='33.24%'>Description</th></tr><tr><td>user</td><td>Pointer</td><td>用户</td></tr><tr><td>types</td><td>Pointer[ ]</td><td>类别组</td></tr></table>

## Type 总类别库表
<table><tr><th width='33.24%'>Column</th><th width='33.24%'>Datatype</th><th width='33.24%'>Description</th></tr><tr><td>name</td><td>String</td><td>类别名</td></tr><tr><td>classify</td><td>String</td><td>分类(收入/支出)</td></tr><tr><td>isBased</td><td>Boolean</td><td>是否是基础类别</td></tr><tr><td>icon</td><td>String</td><td>初始状态图标</td></tr><tr><td>activeIcon</td><td>String</td><td>激活状态图标</td></tr><tr><td>listIcon</td><td>String</td><td>列表显示图标</td></tr></table>
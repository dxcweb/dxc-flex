# dxc-flex
dxc-flex是一套简洁、优雅的react flex布局组件，支持react native。  
完整的TypedDefinition，ide提示快速完成开发。
## install

```
yarn add dxc-flex
```
## Example
[位置](http://www.dxcweb.com/api/dxc-flex/examples/simple.html)  
[布局方式](http://www.dxcweb.com/api/dxc-flex/examples/layout.html)  
[Flex布局](http://www.dxcweb.com/api/dxc-flex/examples/flex.html)  

## API
<table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 210px;">Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>layout</td>
            <td>String</td>
            <td>horizontal</td>
            <td>布局方式: horizontal（水平布局），vertical（垂直布局），flow（流布局）</td>
          </tr>
          <tr>
            <td>horizontal</td>
            <td>String</td>
            <td>start</td>
            <td>水平方向: start（开始）center（居中）end（结束），around与between只能在 layout="horizontal"时有效。</td>
          </tr>
          <tr>
            <td>vertical</td>
            <td>String</td>
            <td>start</td>
            <td>垂直方向: start（开始）center（居中）end（结束），around与between只能在 layout="vertical"时有效。</td>
          </tr>
          <tr>
            <td>el</td>
            <td>React.ReactNode | String</td>
            <td>div</td>
            <td>自定元素可以是react的组件也可以是html标签</td>
          </tr>
        </tbody>
      </table>


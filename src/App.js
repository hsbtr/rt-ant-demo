import { ProForm, ProFormItem, ProFormList, ProFormGroup, ProFormText, ProFormDependency } from "@ant-design/pro-form";
import { Form, Space } from "antd";
import './App.css';

function App() {
  return (
    <div className="App">
      <ProForm>
        <ProFormItem label={"测试"}>
          <ProFormList name={"list"} initialValue={[{ label: undefined, value: undefined }]}>
              <ProFormGroup>
                  <ProFormText name={"label"} />
                  <ProFormDependency name={["list", ["label"]]} ignoreFormListField={false}>
                      {(depValue) => {
                          console.log(depValue);
                          return <span>{JSON.stringify(depValue)}</span>
                      }}
                  </ProFormDependency>
              </ProFormGroup>
              {/*{(fields, { add, remove }) => {
                console.log(fields);
                return fields.map(({ key, name, ...rest }) => {

                    return (
                       <Space
                           size={"small"}
                           key={key}
                       >
                           <ProFormText
                               {...rest}
                               name={[name, "label"]}
                           />
                           <ProFormDependency
                               name={[["label"]]}

                           >
                               {(depValue) => {
                                   console.log(depValue);
                                   return (
                                       <span>{JSON.stringify(depValue)}</span>
                                   )
                               }}
                           </ProFormDependency>
                       </Space>
                    )
              });
            }}*/}
          </ProFormList>
        </ProFormItem>
      </ProForm>
    </div>
  );
}

export default App;

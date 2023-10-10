class F8 {
  constructor() {}

  static component = (nameHtml, object = {}) => {
    const { data: getData, template } = object;
    if (typeof getData === "function") {
      const temp = getData();
      // chuyển key của data sang global
      Object.keys(temp).forEach((key) => {
        window[key] = temp[key];
      });

      // đổi biến
      const changeValue = (element) => {
        // đổi biến từ data
        const inner = element.innerHTML;
        let results = inner.match(/{{.+?}}/g);
        if (results) {
          results.forEach((result) => {
            const variables = result.match(/{{(.+?)}}/);
            const newKey = variables[1].trim();
            const newInner = inner.replace(variables[0], window[newKey]);
            element.innerHTML = newInner;
          });
        }
      };

      // bóc template
      const templateEl = document.createElement("template");
      templateEl.innerHTML = template;
      const templateNode = templateEl.content.cloneNode(true);

      Array.from(templateNode.children).forEach((item) => {
        changeValue(item);

        // lấy attribute
        const attributes = item.attributes;
        if (attributes.length) {
          Array.from(attributes).forEach((att) => {
            const attKey = att.name;
            const attValue = att.value;
            // lấy event
            const attArrKey = attKey.split(":");
            if (attArrKey[0] === "v-on") {
              const eventName = attArrKey[1];
              item.addEventListener(eventName, function () {
                eval(attValue);

                Object.keys(temp).forEach((key) => {
                  if (attValue.includes(key)) {
                    Array.from(templateNode.children).forEach((ele) => {
                      if (ele.innerHTML.includes(key)) {
                        changeValue(ele);
                      }
                    });
                  }
                });
              });
            }
          });
        }
      });

      customElements.define(
        nameHtml,
        class extends HTMLElement {
          constructor() {
            super();
            this.append(templateNode);
          }
        }
      );
    } else if (typeof getData === "undefined") {
      customElements.define(
        nameHtml,
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback() {
            this.innerHTML = template;
          }
        }
      );
    }
  };
}

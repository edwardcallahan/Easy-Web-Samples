dojo.declare("PageItemInsert", wm.Page, {
start: function() {
//Start the user off in insert mode
this.itemDBForm.beginDataInsert();
},
"preferredDevice": "desktop",
_end: 0
});

PageItemInsert.widgets = {
onItemDBFormInsertSuccess: ["wm.Property", {"isEvent":true,"property":"itemDBForm.onInsertSuccess","type":"string"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
itemDBForm: ["wm.DBForm", {"desktopHeight":"116px","fitToContentHeight":true,"formBehavior":"insertOnly","height":"140px","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.custpurchasedb.data.Item"}, {"onEnterKeyPress":"itemDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"itemDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"itemDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"itemDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire3: ["wm.Wire", {"source":"itemDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
labelNewItem: ["wm.Label", {"caption":"Insert a new item","padding":"4","width":"559px"}, {}],
itemidEditor1: ["wm.Number", {"caption":"Itemid","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"itemid","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
itemnameEditor1: ["wm.Text", {"caption":"Itemname","captionSize":"120px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"itemname","height":"26px","readonly":true,"width":"100%"}, {}],
priceEditor1: ["wm.Currency", {"caption":"Price","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"price","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
itemDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
itemDBFormNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"itemDBForm.editNewObject"}],
itemDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"itemDBForm.cancelEdit"}],
itemDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"itemDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${itemDBForm.invalid} || !${itemDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

PageItemInsert.prototype._cssText = '';
PageItemInsert.prototype._htmlText = '';
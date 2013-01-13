PageLayers.widgets = {
	navigationCallPrev: ["wm.NavigationCall", {"operation":"previousLayer"}, {}, {
		input: ["wm.ServiceInput", {"type":"previousLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"layers1","targetProperty":"layers"}, {}]
			}]
		}]
	}],
	navigationCallNext: ["wm.NavigationCall", {"operation":"nextLayer"}, {}, {
		input: ["wm.ServiceInput", {"type":"nextLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"layers1","targetProperty":"layers"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		layers1: ["wm.Layers", {"defaultLayer":0}, {}, {
			layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel3: ["wm.Panel", {"height":"120px","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
					labelLayerWelcome1: ["wm.Label", {"caption":"Welcome to Layer 1!","padding":"4","styles":{"fontSize":"18px"}}, {}],
					panel4: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						buttonPrev1: ["wm.Button", {"caption":"Previous","margin":"4"}, {"onclick":"navigationCallPrev"}],
						buttonNext1: ["wm.Button", {"caption":"Next","margin":"4"}, {"onclick":"navigationCallNext"}]
					}],
					labelLayerNumber1: ["wm.Label", {"align":"center","caption":"ONE","height":"29px","padding":"4","styles":{"fontSize":"24px","color":"#1352a4"}}, {}]
				}]
			}],
			layer2: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel5: ["wm.Panel", {"height":"103px","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
					labelLayerWelcome2: ["wm.Label", {"caption":"Welcome to Layer 2!","padding":"4","styles":{"fontSize":"18px"}}, {}],
					panel6: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						buttonPrev2: ["wm.Button", {"caption":"Previous","margin":"4"}, {"onclick":"navigationCallPrev"}],
						buttonNext2: ["wm.Button", {"caption":"Next","margin":"4"}, {"onclick":"navigationCallNext"}]
					}],
					labelLayerNumber2: ["wm.Label", {"align":"center","caption":"TWO","height":"29px","padding":"4","styles":{"fontSize":"24px","color":"#1352a4"}}, {}]
				}]
			}],
			layer3: ["wm.Layer", {"borderColor":"","caption":"layer3","horizontalAlign":"center","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"103px","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
					labelLayerWelcome3: ["wm.Label", {"caption":"Welcome to Layer 3!","padding":"4","styles":{"fontSize":"18px"}}, {}],
					panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						buttonPrev3: ["wm.Button", {"caption":"Previous","margin":"4"}, {"onclick":"navigationCallPrev"}],
						buttonNext3: ["wm.Button", {"caption":"Next","margin":"4"}, {"onclick":"navigationCallNext"}]
					}],
					labelLayerNumber3: ["wm.Label", {"align":"center","caption":"THREE","height":"29px","padding":"4","styles":{"fontSize":"24px","color":"#1352a4"}}, {}]
				}]
			}]
		}]
	}]
}


Blockly.Python['esp_now_send'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `now.send(${value_value})\n`;
  return code;
};

Blockly.Python['esp_now_send_to'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);

  var code = `enowAbsL.send(${value_value}, ${value_to})\n`;
  return code;
};

Blockly.Python['esp_now_is_ready_read'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var code = `now.isReadyToRead()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_read_as_text'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var code = `now.readAsText()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_read_as_number'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var code = 'now.readAsNumber()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_get_my_mac'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var code = 'now.getMyMAC()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_get_sender_mac'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import espNowAbstractionLayer as enowAbsL';

  var code = 'now.getSenderMAC()';
  return [code, Blockly.Python.ORDER_NONE];
};

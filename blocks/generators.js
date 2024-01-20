Blockly.Python['esp_now_add_peer'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_channel = Blockly.Python.valueToCode(block, 'channel', Blockly.Python.ORDER_ATOMIC);

  var code = `now.addPeer(${value_value}, ${value_channel})\n`;
  return code;
};

Blockly.Python['esp_now_remove_peer'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `now.removePeer(${value_value})\n`;
  return code;
};

Blockly.Python['esp_now_DEBUG_print_peers_Info'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = `now.DEBUG_printPeersInfo()\n`;
  return code;
};

Blockly.Python['esp_now_DEBUG_get_peer_count'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = `now.DEBUG_getPeerCount()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_send'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `now.send(${value_value})\n`;
  return code;
};

Blockly.Python['esp_now_send_to'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_to = Blockly.Python.valueToCode(block, 'to', Blockly.Python.ORDER_ATOMIC);

  var code = `now.send(${value_value}, ${value_to})\n`;
  return code;
};

Blockly.Python['esp_now_is_ready_read'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = `now._isReadyToRead()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_read_as_text'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = `now.readAsText()`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_read_as_number'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = 'now.readAsNumber()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_get_my_mac'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = 'now.getMyMacAddress()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['esp_now_get_sender_mac'] = function(block) {
  Blockly.Python.definitions_['import_betterESPNOW'] = 'import betterESPNOW as now';

  var code = 'now.getSenderMacAddress()';
  return [code, Blockly.Python.ORDER_NONE];
};

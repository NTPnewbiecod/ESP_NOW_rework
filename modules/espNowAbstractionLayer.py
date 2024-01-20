import betterESPNOW

esp_now = betterESPNOW.ESPN()

def addPeer(mac: str, _channel: int):
  esp_now.addPeer(mac, _channel)

def removePeer(mac: str):
  esp_now.removePeer(mac)

def DEBUG_printPeersInfo():
  try:
    esp_now._DEBUG_print_peers_info()
  except:
    try:
      esp_now.DEBUG_print_peers_info()
    except:
      pass

def DEBUG_getPeerCount():
  return esp_now._get_peer_count()

def getMyMacAddress() -> str:
  return esp_now.getMyMAC()

def getSenderMacAddress() -> str:
  return esp_now.getSenderMAC()

def send(msg: str, mac: str = None):
  esp_now.send(msg, mac)
  
def readAsNumber() -> float or int:
  return esp_now.readAsNumber()

def readAsText() -> str:
  return esp_now.readAsText()

def _isReadyToRead():
  esp_now._is_ready_to_read()
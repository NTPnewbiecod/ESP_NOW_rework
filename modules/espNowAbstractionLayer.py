import betterESPNOW

esp_now = betterESPNOW.ESPN()

def addPeer(mac: str):
  esp_now.addPeer(mac)

def removePeer(mac: str):
  esp_now.removePeer(mac)

def DEBUG_printPeersInfo():
  esp_now._print_peers_info()

def DEBUG_getPeerCount():
  return esp_now._get_peer_count()

def getMyMacAddress() -> str:
  return esp_now.getMyMAC()

def getSenderMacAddress() -> str:
  return esp_now.getSenderMAC()
  
def readAsNumber() -> float or int:
  return esp_now.readAsNumber()

def readAsText() -> str:
  return esp_now.readAsText()


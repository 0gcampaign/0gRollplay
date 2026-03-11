import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import globalContext from './../../context/global/globalContext'
import LoadingScreen from '../../components/loading/LoadingScreen'

import socketContext from '../../context/websocket/socketContext'
import { CS_FETCH_LOBBY_INFO } from '../../game/actions'
import './ConnectWallet.scss'

const ConnectWallet = () => {
  const { setWalletAddress, setChipsAmount } = useContext(globalContext)

  const { socket } = useContext(socketContext)
  const navigate = useNavigate()
  const query = new URLSearchParams(useLocation().search);
  const walletAddress = query.get('walletAddress')
  const gameId = query.get('gameId')
  const username = query.get('username')

  useEffect(() => {
    if (socket !== null && socket.connected === true) {
      if (walletAddress && gameId && username) {
        console.log(username)
        setWalletAddress(walletAddress)
        socket.emit(CS_FETCH_LOBBY_INFO, { walletAddress, socketId: socket.id, gameId, username })
        console.log(CS_FETCH_LOBBY_INFO, { walletAddress, socketId: socket.id, gameId, username })
        navigate('/play')
      }
    }
  }, [socket, walletAddress, gameId, username, setWalletAddress, navigate])

  if (!walletAddress || !gameId || !username) {
    return (
      <div className="connect-wallet-error">
        <h1>Missing Connection Parameters</h1>
        <p>Please provide walletAddress, gameId, and username in the URL.</p>
        <button onClick={() => navigate('/')}>Back to Landing</button>
      </div>
    );
  }

  return (
    <>
      <LoadingScreen />
    </>
  )
}

export default ConnectWallet

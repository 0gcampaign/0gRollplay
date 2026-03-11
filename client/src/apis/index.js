import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../clientConfig';


export const useApi = () => {
  const getUserProfile = async (address) => {
    try {
      const { data } = await axios.post(`${config.serverURI}/get_profile`, {
        address: address
      });
      if (data.success) {
        console.log('success', data)
        return data
      } else {
        console.log('error', data)
        return null;
      }
    } catch (err) {
      toast.error(err.message)
      console.log(err)
    }
  }

  const getPokerTables = async (gameId) => {
    try {
      const { data } = await axios.post(`${config.serverURI}/get_poker_tables`, {
        gameId: gameId
      });
      if (data.success) {
        return data.result
      } else {
        toast.error('Failed to load all games.')
        return null;
      }
    } catch (err) {
      toast.error(err.message)
      console.log(err)
    }
  }

  const getGameById = async (gameId) => {
    try {
      const { data } = await axios.post(`${config.serverURI}/get_game_by_id`, {
        gameId: gameId
      });
      if (data.success) {
        return data.result
      } else {
        toast.error('Failed to load all games.')
        return null;
      }
    } catch (err) {
      toast.error(err.message)
      console.log(err)
    }
  }


  return {
    getUserProfile,
    getPokerTables,
    getGameById,
  }
}
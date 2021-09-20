import endPoints from '../src/enums/endpoints'
import instance from './axios'

export const getPopulationCompitions = (prefCode) => {
  const url = `${endPoints.POPULATION}?prefCode=${prefCode}`
  return instance.get(url)
}

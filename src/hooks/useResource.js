import { useState, useEffect } from 'react'
import axios from 'axios'

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    axios
    .get(baseUrl)
    .then(res => setResources(res.data))
    .catch(error => console.log(error.message))
  }, [baseUrl])

  const create = async (resource) => {
    try {
      const response = await axios.post(baseUrl, resource)
      setResources(resources.concat(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }

  const service = {
    create
  }

  return [
    resources, service
  ]
}
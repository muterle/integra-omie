import * as bcrypt from 'bcrypt'
import { getRepository, Repository } from 'typeorm'
import { User } from '../database/entity/user.entity'

const login = async (username: string, password: string) => {
  const userRepository = getRepository(User)

  const user = await userRepository.findOne({ where: { login: username } })

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      return { id: user.id, name: user.name }
    }
  } else {
    return null
  }
}

export default { login }

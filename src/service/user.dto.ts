
import {z} from "zod"

const UserDto = z.object({
    username: z.string().nonempty(),
    password: z.string().nonempty(),
})

export type UserDto = z.infer<typeof UserDto>;
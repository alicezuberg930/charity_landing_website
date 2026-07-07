import { HandHeart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

const LoginPage = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-4">
            <Card className="w-full max-w-sm shadow-sm">
                <CardHeader className="items-center text-center">
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <HandHeart className="size-5" />
                    </div>
                    <CardTitle>Đăng nhập quản lý CMS</CardTitle>
                    <CardDescription>Ánh sáng từ thiện</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="phone">Số điện thoại</FieldLabel>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="username"
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </Field>
                            <Button type="submit" className="w-full">
                                Đăng nhập
                            </Button>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default LoginPage
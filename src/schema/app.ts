import { z } from "zod";
import { isCPF, isCNPJ } from 'validation-br'
const validateCpfCnpj = (num: string) => {
    if (num.length < 12) {
        return isCPF(num);
    }
    if (num.length > 11) {
        return isCNPJ(num);
    }
};

export const accountSchema = z.object({
    cpfCliente: z.string({ error: "Informe seu cpf" }),
    nomeCliente: z.string({ error: "Informe seu nome" }),
    enderecoCliente: z.string({ error: "Informe seu endereco" }),
    cepCliente: z.string({ error: "Informe seu cep" }),
    ufCliente: z.string({ error: "Informe seu estado" }),
    cidadeCliente: z.string({ error: "Informe sua cidade" }),
    celularCliente: z.string({ error: "Informe seu celular" }),
    emailCliente: z.email({ error: "Informe um e-mail válido" }),
    nascimentoCliente: z.string({ error: "Informe o nascimento" })
});
export type AccountFormType = z.infer<typeof accountSchema>;

export const signInSchema = z.object({
    cpfcnpj: z.string({ error: "Digite o CPF/CNPJ." })
        .refine(value => validateCpfCnpj(value), { error: "CPF/CNPJ inválido!" })
});
export type SignInFormType = z.infer<typeof signInSchema>;

export const CheckPasswordSchema = z.object({
    password: z.string({ error: "Digite sua senha." })
});
export type CheckPasswordFormType = z.infer<typeof CheckPasswordSchema>;
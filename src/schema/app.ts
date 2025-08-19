import { z } from "zod";

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


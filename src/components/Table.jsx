import style from './Table.module.css'

const Table = () => {
    return (
        <>
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        <td colSpan="3">Veja a interpretação do IMC</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className={style.subtitulos}>
                        <td>IMC</td>
                        <td>Classificação</td>
                        <td>Obesidade <small>(grau)</small></td>
                    </tr>
                    <tr className={style.linha}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr className={style.linha}>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr className={style.linha}>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td>I</td>
                    </tr>
                    <tr className={style.linha}>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td>II</td>
                    </tr>
                    <tr className={style.linha}>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td>III</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table
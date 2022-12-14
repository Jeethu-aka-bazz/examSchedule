import React, { useState } from 'react'
import { dropdownstyle } from './styledcomp'
import { Box } from '../Reusecomp/Box'
import { Textcomp } from '../Reusecomp/Textcomp'
import { Imgcomp } from '../Reusecomp/Imgcomp'
import dropdownicon from '../../../images/dropdownbtn.png'
import Dropdown from './Dropdowncomp/Dropdownstyle'

export const Secondrow = ({
    department,
    examdata,
    activeexam,
    setactiveexam,
    semester,
}) => {
    // console.log(semester);
    // console.log(branch);
    // console.log(department);
    // console.log("exame data");
    // console.log(examdata[semester][department]);

    let examviadep2 =
        examdata[semester] !== undefined &&
        examdata[semester][department] !== undefined &&
        examdata[semester][department]

    const [ishiddenexam, sethiddenexam] = useState(true)
    const changeHiddenexam = () => {
        sethiddenexam(!ishiddenexam)
    }

    const changeacticeexam = (e) => {
        sethiddenexam(!ishiddenexam)
        setactiveexam(e.target.innerHTML)
    }

    return (
        <Box name="secondrow" cssStyle={{ marginTop: '30px' }}>
            <Textcomp Comp="div" value="Exam type" />
            <Box
                name="examtypedropdown"
                cssStyle={{
                    ...dropdownstyle,
                    width: '98%',
                    padding: '20px 0 20px 24px',
                    position: 'relative',
                }}
                onclick={changeHiddenexam}
            >
                <Textcomp value={activeexam} />
                <Imgcomp
                    cssStyles={{
                        position: 'absolute',
                        right: '2%',
                        bottom: '40%',
                    }}
                    source={dropdownicon}
                    alternative="dropdown"
                />
            </Box>
            <Dropdown hidden={ishiddenexam} style={{ width: '76.7%' }}>
                {examviadep2 !== false ? (
                    examviadep2.map((exams, i) => (
                        <Textcomp
                            Comp="div"
                            key={i}
                            value={exams.exam}
                            onclick={changeacticeexam}
                        />
                    ))
                ) : (
                    <Textcomp
                        Comp="div"
                        value="noExam"
                        onclick={changeacticeexam}
                    />
                )}
            </Dropdown>
        </Box>
    )
}

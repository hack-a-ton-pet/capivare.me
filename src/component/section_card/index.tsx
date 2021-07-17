import React from 'react'
import CapiButton from '../button'
import './styles.css'

export interface SectionCardProps {
    title: string
    description: string
    buttonText: string
    id: string
    onClick: () => void
}

const SectionCard: React.FC<SectionCardProps> = ({ title, description, buttonText, id, onClick }) => {
    return (
        <div id={id} className="section_card">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="button_wrapper">
                <CapiButton text={buttonText} onClick={onClick} />
            </div>
        </div>
    )
}

export default SectionCard
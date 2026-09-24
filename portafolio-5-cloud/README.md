# ☁️ Portafolio N°5: Arquitectura Cloud Resiliente y Escalable en AWS

## 📌 Resumen del Proyecto
El **Portafolio N°5** aborda la modernización de una infraestructura tradicional hacia una arquitectura en la nube resiliente, escalable, segura y optimizada en costos, fundamentada en los principios del **AWS Well-Architected Framework** (priorizando los pilares de *Fiabilidad*, *Eficiencia del Rendimiento* y *Optimización de Costos*).

El principal objetivo técnico es soportar el almacenamiento masivo de datos, distribución global de contenido multimedia con baja latencia, desacoplamiento de procesos asíncronos y respaldo continuo de la información para garantizar la continuidad del negocio.

---

## 🛠️ Componentes Técnicos
* **Almacenamiento de Objetos:** [Amazon S3](https://aws.amazon.com/s3/) como repositorio central desacoplado de la capa de cómputo para datos estáticos, logs y respaldos.
* **Resiliencia & Backup:** Control de versiones con *S3 Versioning*, políticas avanzadas de retención con *AWS Backup* y replicación entre buckets.
* **Nube Híbrida & Redes:** Conexión privada y dedicada desde la infraestructura local (*On-Premises*) a la VPC mediante *AWS Direct Connect*.
* **CDN & Distribución Segura:** *Amazon CloudFront* integrado con *Signed URLs / Signed Cookies* para la entrega rápida de contenido protegiendo el origen.
* **Procesamiento Asíncrono:** *Amazon SQS* para el desacoplamiento de tareas pesadas en segundo plano ejecutadas por workers.

---

## Diagrama de Arquitectura
![Diagrama de Arquitectura](./docs/arquitectura-aws.png)




